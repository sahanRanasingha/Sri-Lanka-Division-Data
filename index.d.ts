export interface District {
  name: string;
  divisional_secretariats: string[];
}

export interface Province {
  name: string;
  districts: District[];
}

export interface SriLankaDivisionData {
  provinces: Province[];
}

/** The raw array of all province objects. */
export const provinces: Province[];

/** Get the raw data object containing all provinces, districts, and divisional secretariats. */
export function getAllData(): SriLankaDivisionData;

/** Get a list of all province names. */
export function getProvinces(): string[];

/** Get a list of all district names, optionally filtered by province name. */
export function getDistricts(provinceName?: string): string[];

/** Get a list of all divisional secretariat names, optionally filtered by district name. */
export function getDivisionalSecretariats(districtName?: string): string[];

/** Get a province object by name. */
export function getProvince(name: string): Province | undefined;

/** Get a district object by name (searches across all provinces). */
export function getDistrict(name: string): District | undefined;

/** Get the province that a given district belongs to. */
export function getProvinceOfDistrict(districtName: string): string | undefined;

/** Get the district that a given divisional secretariat belongs to. */
export function getDistrictOfDivisionalSecretariat(dsName: string): string | undefined;
