Show regional data of the three APIs provided in the dropdown. The first dropdown will display data on all provinces in Indonesia, so on for the second dropdown will display district data according to the province selected in the dropdown, and the third dropdown displays district data according to the district selected in the dropdown. this dropdown value is continuous, if the province has not been selected then the next dropdown value will be empty.

1. Use axios to perform the Fetch API.
2. Use useEffect to handle the MOUNTING, UPDATING phases.
3. Use useState to store Fetch API result data.
4. Make a function for (Fetch API, handleChange based on the condition of the value obtained)
5. May use the try and catch method

API URL :
1. https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json
2. https://www.emsifa.com/api-wilayah-indonesia/api/regencies/exampleid.json
3. https://www.emsifa.com/api-wilayah-indonesia/api/districts/exampleid.json