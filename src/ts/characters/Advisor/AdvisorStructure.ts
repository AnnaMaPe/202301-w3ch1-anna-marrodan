import { type Character } from "../Character/Character";
import { type CharacterStructure } from "../Character/CharacterStructure";

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
