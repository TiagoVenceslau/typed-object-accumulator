/**
 * @module typed-object-accumulator
 * @description A TypeScript library for accumulating objects with type safety
 * @summary This module provides utilities for dynamically accumulating object properties while maintaining type information. It exports the {@link ObjectAccumulator} class and version information.
 */

export * from "./accumulator";

/**
 * @description Represents the current version of the typed-object-accumulator module
 * @summary The actual version number is replaced during the build process with the package version
 * @const VERSION
 * @type {string}
 * @memberOf module:typed-object-accumulator
 */
export const VERSION = "##VERSION##";
