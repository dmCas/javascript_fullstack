declare const getUsername: (user: User) => void;
interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: Say;
}
interface Say {
    (words: string): string;
}
interface Config {
    width?: number;
    [propName: string]: any;
}
declare function CalculateAreas(config: Config): {
    area: number;
};
declare let mySquare1: {
    area: number;
};
declare let mySquare2: {
    area: number;
};
declare let options: {
    widdth: number;
};
declare let mySquare3: {
    area: number;
};
interface VIPUser extends User, SupperUser {
    broadcast: () => void;
}
interface SupperUser {
    getGrade: () => void;
}
