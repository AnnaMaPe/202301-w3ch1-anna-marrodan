import { type CharacterStructure } from "../Character/CharacterStructure";
import { type Fighter } from "../Fighter/Fighters";

export interface SquireStructure extends CharacterStructure {
  serves: Fighter;
  kissAssLevel: number;
}
