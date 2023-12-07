import { map } from "nanostores";

type UserCred = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  major: string;
  academicLevel: string;
};

export const $userCred = map<UserCred>({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  major: "",
  academicLevel: "",
});
