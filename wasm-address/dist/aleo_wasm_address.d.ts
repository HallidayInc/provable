/* tslint:disable */
/* eslint-disable */

/**
 * Public address of an Aleo account.
 */
export class Address {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Create an address from a little-endian boolean bit array.
     *
     * @param {Array} bits Little-endian boolean array representing the bits of the address.
     * @returns {Address} The address object.
     */
    static fromBitsLe(bits: Array<any>): Address;
    /**
     * Create an address from a Uint8Array of little-endian bytes.
     *
     * @param {Uint8Array} bytes Little-endian byte array representing the address.
     * @returns {Address} The address object.
     */
    static fromBytesLe(bytes: Uint8Array): Address;
    /**
     * Create an address from an array of Field elements.
     *
     * @param {Array} fields An array of Field objects.
     * @returns {Address} The address object.
     */
    static fromFields(fields: Array<any>): Address;
    /**
     * Derive the address corresponding to a program ID.
     *
     * The encoding matches the snarkVM convention: each identifier component (name and network)
     * is encoded as a field element by packing the UTF-8 bytes into a little-endian bit array,
     * then the pair is hashed to a group element using Poseidon4 with domain "AleoPoseidon4".
     * This is network-agnostic since both MainnetV0 and TestnetV0 use identical Poseidon
     * parameters over the same curve.
     *
     * @param {string} program_id The program ID string (e.g. "credits.aleo").
     * @returns {Address} The address corresponding to the program ID.
     */
    static fromProgramId(program_id: string): Address;
    /**
     * Create an Aleo address from its string representation.
     *
     * @param {string} address String representation of an address.
     * @returns {Address} The address object.
     */
    static from_string(address: string): Address;
    /**
     * Check if the input is a valid Aleo address.
     *
     * @param {string | Uint8Array} address Either a string representation or a little-endian
     *        Uint8Array of bytes.
     * @returns {boolean} True if the input is a valid address, false otherwise.
     */
    static isValid(address: any): boolean;
    /**
     * Get the little-endian boolean bit array representation of the address.
     *
     * @returns {Array} Little-endian boolean bit array.
     */
    toBitsLe(): Array<any>;
    /**
     * Get the little-endian byte array representation of the address.
     *
     * @returns {Uint8Array} Little-endian byte array of the address.
     */
    toBytesLe(): Uint8Array;
    /**
     * Get the field element array representation of the address.
     *
     * @returns {Array} Array of Field objects.
     */
    toFields(): Array<any>;
    /**
     * Get the string representation of the address.
     *
     * @returns {string} String representation of the address.
     */
    to_string(): string;
}

/**
 * Field element, exposed for use with Address field serialization.
 */
export class Field {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Create a field element from a Uint8Array of little-endian bytes.
     *
     * @param {Uint8Array} bytes Little-endian byte array.
     * @returns {Field} The field element.
     */
    static fromBytesLe(bytes: Uint8Array): Field;
    /**
     * Creates a field element from its string representation.
     *
     * @param {string} field String representation of a field element.
     * @returns {Field} The field element.
     */
    static fromString(field: string): Field;
    /**
     * Encode the field element as a Uint8Array of little-endian bytes.
     *
     * @returns {Uint8Array} Little-endian byte array of the field element.
     */
    toBytesLe(): Uint8Array;
    /**
     * Returns the string representation of the field element.
     *
     * @returns {string} String representation of the field element.
     */
    toString(): string;
}