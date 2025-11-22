import { toKebabCase } from '@std/text'

export const composeStateStoreName = ({
	projectName,
}: {
	projectName: string;
}) => {
	return toKebabCase(`${projectName}-state-store`);
};
