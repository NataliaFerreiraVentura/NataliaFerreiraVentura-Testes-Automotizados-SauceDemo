// cypress/support/dataGenerators.js
import faker from 'faker';

/**
 * Gera um nome aleatório.
 * @returns {string} Nome aleatório.
 */
export const generateRandomName = () => faker.name.findName();

/**
 * Gera um sobrenome aleatório.
 * @returns {string} Sobrenome aleatório.
 */
export const generateRandomSurname = () => faker.name.lastName();

/**
 * Gera um CEP aleatório.
 * @returns {string} CEP aleatório no formato "12345".
 */
export const generateRandomZipCode = () => faker.address.zipCode().replace('-', '');
