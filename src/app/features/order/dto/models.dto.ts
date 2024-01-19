import { ColorDTO } from "./color.dto";

export interface ModelsDTO {
  code?: string;
  description?: string;
  colors?: ColorDTO[];
}
