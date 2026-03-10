const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const {
  provinces,
  getAllData,
  getProvinces,
  getDistricts,
  getDivisionalSecretariats,
  getProvince,
  getDistrict,
  getProvinceOfDistrict,
  getDistrictOfDivisionalSecretariat,
} = require("./index");

describe("provinces export", () => {
  it("should be an array of 9 provinces", () => {
    assert.ok(Array.isArray(provinces));
    assert.equal(provinces.length, 9);
  });

  it("each province should have a name and districts array", () => {
    for (const province of provinces) {
      assert.ok(typeof province.name === "string");
      assert.ok(Array.isArray(province.districts));
      assert.ok(province.districts.length > 0);
    }
  });
});

describe("getAllData()", () => {
  it("should return an object with a provinces array", () => {
    const data = getAllData();
    assert.ok(data);
    assert.ok(Array.isArray(data.provinces));
    assert.equal(data.provinces.length, 9);
  });
});

describe("getProvinces()", () => {
  it("should return all 9 province names", () => {
    const names = getProvinces();
    assert.equal(names.length, 9);
    assert.ok(names.includes("Western Province"));
    assert.ok(names.includes("Northern Province"));
    assert.ok(names.includes("Southern Province"));
  });

  it("should return strings", () => {
    const names = getProvinces();
    for (const name of names) {
      assert.ok(typeof name === "string");
    }
  });
});

describe("getDistricts()", () => {
  it("should return all 25 district names when no province is specified", () => {
    const districts = getDistricts();
    assert.equal(districts.length, 25);
    assert.ok(districts.includes("Colombo"));
    assert.ok(districts.includes("Gampaha"));
  });

  it("should return districts for a specific province", () => {
    const districts = getDistricts("Western Province");
    assert.equal(districts.length, 3);
    assert.ok(districts.includes("Colombo"));
    assert.ok(districts.includes("Gampaha"));
    assert.ok(districts.includes("Kalutara"));
  });

  it("should be case-insensitive", () => {
    const districts = getDistricts("western province");
    assert.equal(districts.length, 3);
  });

  it("should return empty array for non-existent province", () => {
    const districts = getDistricts("Non Existent Province");
    assert.deepEqual(districts, []);
  });
});

describe("getDivisionalSecretariats()", () => {
  it("should return all divisional secretariats when no district is specified", () => {
    const ds = getDivisionalSecretariats();
    assert.ok(ds.length > 300);
  });

  it("should return divisional secretariats for a specific district", () => {
    const ds = getDivisionalSecretariats("Colombo");
    assert.ok(ds.length > 0);
    assert.ok(ds.includes("Colombo"));
    assert.ok(ds.includes("Dehiwala"));
  });

  it("should be case-insensitive", () => {
    const ds = getDivisionalSecretariats("colombo");
    assert.ok(ds.length > 0);
  });

  it("should return empty array for non-existent district", () => {
    const ds = getDivisionalSecretariats("Non Existent District");
    assert.deepEqual(ds, []);
  });
});

describe("getProvince()", () => {
  it("should return a province object by name", () => {
    const province = getProvince("Western Province");
    assert.ok(province);
    assert.equal(province.name, "Western Province");
    assert.ok(Array.isArray(province.districts));
    assert.equal(province.districts.length, 3);
  });

  it("should be case-insensitive", () => {
    const province = getProvince("western province");
    assert.ok(province);
    assert.equal(province.name, "Western Province");
  });

  it("should return undefined for non-existent province", () => {
    const province = getProvince("Non Existent Province");
    assert.equal(province, undefined);
  });
});

describe("getDistrict()", () => {
  it("should return a district object by name", () => {
    const district = getDistrict("Colombo");
    assert.ok(district);
    assert.equal(district.name, "Colombo");
    assert.ok(Array.isArray(district.divisional_secretariats));
    assert.ok(district.divisional_secretariats.length > 0);
  });

  it("should be case-insensitive", () => {
    const district = getDistrict("colombo");
    assert.ok(district);
    assert.equal(district.name, "Colombo");
  });

  it("should return undefined for non-existent district", () => {
    const district = getDistrict("Non Existent District");
    assert.equal(district, undefined);
  });
});

describe("getProvinceOfDistrict()", () => {
  it("should return the province name for a given district", () => {
    const province = getProvinceOfDistrict("Colombo");
    assert.equal(province, "Western Province");
  });

  it("should be case-insensitive", () => {
    const province = getProvinceOfDistrict("colombo");
    assert.equal(province, "Western Province");
  });

  it("should return undefined for non-existent district", () => {
    const province = getProvinceOfDistrict("Non Existent District");
    assert.equal(province, undefined);
  });
});

describe("getDistrictOfDivisionalSecretariat()", () => {
  it("should return the district name for a given divisional secretariat", () => {
    const district = getDistrictOfDivisionalSecretariat("Dehiwala");
    assert.equal(district, "Colombo");
  });

  it("should be case-insensitive", () => {
    const district = getDistrictOfDivisionalSecretariat("dehiwala");
    assert.equal(district, "Colombo");
  });

  it("should return undefined for non-existent divisional secretariat", () => {
    const district = getDistrictOfDivisionalSecretariat("Non Existent DS");
    assert.equal(district, undefined);
  });
});
