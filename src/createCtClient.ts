import axios from "axios";

export type CloudTiconClient = ReturnType<typeof createCtClient>;
export const createCtClient = (url: string = "https://auth.dev2.cloudticon.com", token: string) => {
  const client = axios.create({
    baseURL: url,
    headers: {
      'x-api-key': token
    }
  });

  return {
    getOutput({project, repository, branch}: {project: string, repository: string, branch: string}) {
      return client.get(`/project/${project}/repository/${repository}/branch/${branch}/output`)
    }
  }
}