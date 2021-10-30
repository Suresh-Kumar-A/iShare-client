export class AppConstants{
    public static USERNAME_REGEXP=/^([A-Za-z])(?!.*[ !`~@#$%^&*()+\-=\[\]{};':"\\|,<>\/?])(.*[A-Za-z0-9])$/;
    public static PASSWORD_REGEXP=/^(?=.*\d)(?!.*[ ])(?=.*[a-z])(?=.*[A-Z]).{3,15}$/;
    public static EMAIL_REGEXP=/^([a-zA-Z])[\w.-_]*[\w]+@([A-Za-z0-9_]+[.]{1})+([a-zA-Z]{2,})$/;
    public static NAME_REGEXP=/^([A-Za-z])(?!.*[!`~@#$%^&*()+\-=\[\]{};':"\\|,<>\/?])(.*[A-Za-z0-9])$/;
}