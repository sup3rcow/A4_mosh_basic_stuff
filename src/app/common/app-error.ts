
export class AppError {
    constructor(public originalError?: any) { // sa keyword public, kazemo da je ulazni parametar takodjer i public field
    }
}
