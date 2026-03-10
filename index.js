"use strict";

const data = require("./sri-lanka-division-data.json");

/**
 * Get the raw data object containing all provinces, districts, and divisional secretariats.
 * @returns {{ provinces: Array<{ name: string, districts: Array<{ name: string, divisional_secretariats: string[] }> }> }}
 */
function getAllData() {
  return data;
}

/**
 * Get a list of all province names.
 * @returns {string[]}
 */
function getProvinces() {
  return data.provinces.map((p) => p.name);
}

/**
 * Get a list of all district names, optionally filtered by province name.
 * @param {string} [provinceName] - Optional province name to filter by.
 * @returns {string[]}
 */
function getDistricts(provinceName) {
  if (provinceName) {
    const province = data.provinces.find(
      (p) => p.name.toLowerCase() === provinceName.toLowerCase()
    );
    if (!province) {
      return [];
    }
    return province.districts.map((d) => d.name);
  }
  return data.provinces.flatMap((p) => p.districts.map((d) => d.name));
}

/**
 * Get a list of all divisional secretariat names, optionally filtered by district name.
 * @param {string} [districtName] - Optional district name to filter by.
 * @returns {string[]}
 */
function getDivisionalSecretariats(districtName) {
  if (districtName) {
    for (const province of data.provinces) {
      const district = province.districts.find(
        (d) => d.name.toLowerCase() === districtName.toLowerCase()
      );
      if (district) {
        return district.divisional_secretariats;
      }
    }
    return [];
  }
  return data.provinces.flatMap((p) =>
    p.districts.flatMap((d) => d.divisional_secretariats)
  );
}

/**
 * Get a province object by name.
 * @param {string} name - The province name.
 * @returns {{ name: string, districts: Array<{ name: string, divisional_secretariats: string[] }> } | undefined}
 */
function getProvince(name) {
  return data.provinces.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Get a district object by name (searches across all provinces).
 * @param {string} name - The district name.
 * @returns {{ name: string, divisional_secretariats: string[] } | undefined}
 */
function getDistrict(name) {
  for (const province of data.provinces) {
    const district = province.districts.find(
      (d) => d.name.toLowerCase() === name.toLowerCase()
    );
    if (district) {
      return district;
    }
  }
  return undefined;
}

/**
 * Get the province that a given district belongs to.
 * @param {string} districtName - The district name.
 * @returns {string | undefined} The province name, or undefined if not found.
 */
function getProvinceOfDistrict(districtName) {
  for (const province of data.provinces) {
    const district = province.districts.find(
      (d) => d.name.toLowerCase() === districtName.toLowerCase()
    );
    if (district) {
      return province.name;
    }
  }
  return undefined;
}

/**
 * Get the district that a given divisional secretariat belongs to.
 * @param {string} dsName - The divisional secretariat name.
 * @returns {string | undefined} The district name, or undefined if not found.
 */
function getDistrictOfDivisionalSecretariat(dsName) {
  for (const province of data.provinces) {
    for (const district of province.districts) {
      const ds = district.divisional_secretariats.find(
        (s) => s.toLowerCase() === dsName.toLowerCase()
      );
      if (ds) {
        return district.name;
      }
    }
  }
  return undefined;
}

module.exports = {
  provinces: data.provinces,
  getAllData,
  getProvinces,
  getDistricts,
  getDivisionalSecretariats,
  getProvince,
  getDistrict,
  getProvinceOfDistrict,
  getDistrictOfDivisionalSecretariat,
};
