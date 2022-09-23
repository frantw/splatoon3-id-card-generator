export * from './weapons.constant';

export enum NAME_SIZE {
    SMALL = '字體小',
    MEDIUM = '字體中',
    LARGE = '字體大',
}

export enum CARD_TYPE {
    GAME_CARD = 'game-card',
    STAFF_CARD = 'staff-card',
}

export enum CARD_NAME {
    GAME_CARD = '遊戲名片',
    STAFF_CARD = '打工仔員工證',
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

export enum PLAY_RULE {
    TURF_WAR = '塗地比賽',
    SALMON_RUN = '鮭魚打工',
    TABLETURF_BATTLE = '佔地鬥士',
    SPLAT_ZONES = '真格區域',
    RAINMAKER = '真格魚虎',
    TOWER_CONTROL = '真格塔樓',
    CLAM_BLITZ = '真格蛤蜊',
}

export enum PLAY_TIME {
    MON = '星期一',
    TUE = '星期二',
    WED = '星期三',
    THU = '星期四',
    FRI = '星期五',
    SAT = '星期六',
    SUN = '星期天',
}

export enum SALMON_RUN_LEVEL {
    APPRENTICE = '新手打工仔',
    PART_TIMER = '半吊子打工仔',
    GO_GETTER = '獨當一面打工仔',
    OVERACHIEVER = '熟練打工仔',
    PROFRESHIONAL = '達人打工仔',
    PROFRESHIONAL_PLUS_1 = '達人+1 打工仔',
    PROFRESHIONAL_PLUS_2 = '達人+2 打工仔',
    PROFRESHIONAL_PLUS_3 = '達人+3 打工仔',
    EGGSECUTIVE_VP = '傳說打工仔',
}

export enum PLAY_STYLE {
    CASUAL = '休閒型',
    HARDCORE = '挑戰型',
    CARRY_ME_PLZ = '前輩帶我飛',
}
