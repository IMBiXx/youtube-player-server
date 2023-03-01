import { NotFoundException } from '~/utils/exceptions';

/**
 * For all other routes not defined, we return an error
 */
export const UnknownRoutesHandler = () => {
  throw new NotFoundException(`La resource demandée n'existe pas`);
};
