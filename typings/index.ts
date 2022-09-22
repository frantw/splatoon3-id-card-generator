export * from './weapons.constant';

export enum CARD_TYPE {
    GAME_CARD = 'game-card',
    STAFF_CARD = 'staff-card',
}

export enum RANK_LEVEL {
    C_MINUS = 'C-',
    C = 'C',
    C_PLUS = 'C+',
    B_MINUS = 'B-',
    B = 'B',
    B_PLUS = 'B+',
    A_MINUS = 'A-',
    A = 'A',
    A_PLUS = 'A+',
    S_MINUS = 'S-',
    S = 'S',
    S_PLUS = 'S+',
}

export enum VOICE_CHAT {
    DISCORD = 'Discord',
    LINE = 'Line',
    NINTENDO_SWITCH_ONLINE = 'Nintendo Switch Online',
    NONE = '不使用語音',
}

export enum PLAY_STYLE {
    TURF_WAR = '塗地比賽',
    SALMON_RUN = '鮭魚打工',
    TABLETURF_BATTLE = '佔地鬥士',
    SPLAT_ZONES = '真格區域',
    RAINMAKER = '真格魚虎',
    TOWER_CONTROL = '真格塔樓',
    CLAM_BLITZ = '真格蛤蜊',
}