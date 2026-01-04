# Sri Lanka Division Data

A comprehensive and structured JSON dataset of Sri Lanka's administrative divisions. This repository provides a hierarchical list including **Provinces**, **Districts**, and **Divisional Secretariats**, making it ideal for software applications requiring address validation, location selection, or data analysis.

## Features

- **Complete Hierarchy**: Covers all 9 Provinces, 25 Districts, and their respective Divisional Secretariats.
- **Easy to Use**: Provided in a standard, lightweight JSON format.
- **Open Source**: Free for use in commercial and personal projects.

## Data Structure

The data is organized hierarchically as follows:

```json
{
  "provinces": [
    {
      "name": "Province Name",
      "districts": [
        {
          "name": "District Name",
          "divisional_secretariats": ["Division 1", "Division 2"]
        }
      ]
    }
  ]
}
```

### Fields

- `provinces`: Array of province objects.
  - `name`: Name of the Province (e.g., "Western Province").
  - `districts`: Array of district objects within that province.
    - `name`: Name of the District (e.g., "Colombo").
    - `divisional_secretariats`: Array of strings, listing all Divisional Secretariats in that district (e.g., ["Colombo", "Dehiwala", ...]).

## Usage Examples

### JavaScript / Node.js

You can simply require or import the JSON file into your project.

```javascript
const sriLankaData = require("./sri-lanka-division-data.json");

// Get all provinces
const provinces = sriLankaData.provinces.map((p) => p.name);
console.log(provinces);

// Get districts in Western Province
const westernDistricts = sriLankaData.provinces
  .find((p) => p.name === "Western Province")
  .districts.map((d) => d.name);
console.log(westernDistricts);
```

### Python

```python
import json

with open('sri-lanka-division-data.json', 'r') as f:
    data = json.load(f)

# Print all districts in the dataset
for province in data['provinces']:
    for district in province['districts']:
        print(f"District: {district['name']}")
```

## Installation

You can use this data by cloning the repository or downloading the JSON file directly.

```bash
git clone https://github.com/sahanRanasingha/Sri-Lanka-Division-Data.git
```

## Contributing

Contributions are welcome! If you find any typos, missing divisions, or outdated information, please feel free to report an issue or submit a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
