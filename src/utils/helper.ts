import { Skill } from "./constants";

export function shuffleArray(array: Array<Skill>) {
    return array
        .map((item) => ({ ...item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ sort, ...item }) => item);
}