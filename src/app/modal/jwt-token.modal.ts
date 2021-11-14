import { Role } from "./enum/role";

export interface JwtToken{
    role: Role,
    iss: String,
    refId: String,
    // exp: 1636825697,
    // "iat": 1636824797,
    username: String
}