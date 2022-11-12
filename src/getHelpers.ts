import {Context} from "./getContext";
import {CloudTiconClient} from "./createCtClient";

export const getHelpers = (ct: CloudTiconClient, context: Context) => {
  return {
    getOutput: (branch = context.branch) => {
      return ct.getOutput({project: context.project, repository: context.repository, branch})
    }
  }
}