// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const url = 'https://stat.ink/api/v3/weapon?full=1';
// @see: https://stat.ink/api-info/weapon3

interface Weapon {
    key: string;
    aliases?: string[] | null;
    type: TypeOrSubOrSpecial;
    name: NameLang;
    main: string;
    sub: TypeOrSubOrSpecial;
    special: TypeOrSubOrSpecial;
    reskin_of: string;
}

interface TypeOrSubOrSpecial {
    key: string;
    aliases?: null[] | null;
    name: NameLang;
}

interface NameLang {
    de_DE: string;
    en_GB: string;
    en_US: string;
    es_ES: string;
    es_MX: string;
    fr_CA: string;
    fr_FR: string;
    it_IT: string;
    ja_JP: string;
    ko_KR: string;
    nl_NL: string;
    ru_RU: string;
    zh_CN: string;
    zh_TW: string;
}

const normalizer = (data: Weapon[]) => {
    if (!data) return [];
    return data.map((weapon: Weapon) => ({
        key: weapon.key,
        type: {
            key: weapon.type.key,
            name: weapon.type.name.zh_TW ?? weapon.type.name.ja_JP,
        },
        name: weapon.name.zh_TW ?? weapon.type.name.ja_JP,
    }));
};

type TWeaponClass = Record<string, string>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const weaponData = normalizer(data as Weapon[]);
        const weaponClass: TWeaponClass = {};
        const weaponType: Record<string, TWeaponClass> = {};

        weaponData.forEach((weapon) => {
            const classKey = weapon.type.key;
            const className = weapon.type.name;
            const weaponKey = weapon.key;
            const weaponName = weapon.name;
            if (!weaponClass?.[classKey]) {
                weaponClass[classKey] = className;
            }
            if (weaponType?.[classKey]) {
                weaponType[classKey] = {
                    ...weaponType[classKey],
                    [weaponKey]: weaponName,
                };
            } else {
                weaponType[classKey] = {
                    [weaponKey]: weaponName,
                };
            }
        });

        res.status(200).json({
            weaponClass,
            weaponType,
        });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch data' });
    }
}
