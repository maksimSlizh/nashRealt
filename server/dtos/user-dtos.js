module.exports = class UserDto {
  email;
  id;
  role;
  isActivated;

  constructor(user) {
    this.email = user.email
    this.id = user.id
    this.role = user.role
    this.isActivated = user.isActivated
  }
}
