import { tmpdir } from "os";
import { normalize } from "path";

export const path = normalize(`${tmpdir()}/coin`);
