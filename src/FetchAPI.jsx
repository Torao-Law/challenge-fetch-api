export default function Fetch_api() {
  const [prov, setProv] = useState([]);
  const [regen, setRegen] = useState([]);
  const [subdis, setSubdis] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState(null);
  const [selectedRegencyId, setSelectedRegencyId] = useState(null);
  const [selectedSubdistrictId, setSelectedSubdistrictId] = useState(null);
  

  const getProvincies = async () => {
    try {
      const response = await axios.get(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );
      console.log(response.data);
      setProv(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getRegencies = async (provinceId) => {
    try {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
      );
      console.log(response.data);
      setRegen(response.data);
      setSelectedRegencyId(null);
    } catch (err) {
      console.log(err);
    }
  };

  const getSubdistricts = async (regencyId) => {
    try {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`
      );
      console.log(response.data);
      setSubdis(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getWards = async (subdistrictId) => {
    try {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${subdistrictId}.json`
      );
      console.log(response.data);
      setWards(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProvincies();
  }, []);

  useEffect(() => {
    if (selectedProvinceId) {
      getRegencies(selectedProvinceId);
    }
  }, [selectedProvinceId]);

  useEffect(() => {
    if (selectedRegencyId) {
      getSubdistricts(selectedRegencyId);
    }
  }, [selectedRegencyId]);

  useEffect(() => {
    if (selectedSubdistrictId) {
      getWards(selectedSubdistrictId);
    }
  }, [selectedSubdistrictId]);

  const handleProvinceChange = (event) => {
    const selectedId = event.target.value;
    setSelectedProvinceId(selectedId);
  };

  const handleRegencyChange = (event) => {
    const selectedId = event.target.value;
    setSelectedRegencyId(selectedId);
  };

  const handleSubdistrictChange = (event) => {
    const selectedId = event.target.value;
    setSelectedSubdistrictId(selectedId);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label className="fw-bold">Provinces</label>
        <select className="form-select" onChange={handleProvinceChange}>
          <option>Select a province</option>
          {prov.map((data) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="fw-bold">Regencies</label>
        <select className="form-select" onChange={handleRegencyChange}>
          <option>Select a regency</option>
          {regen.map((data) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="fw-bold">Subdistricts</label>
        <select className="form-select" onChange={handleSubdistrictChange}>
          <option>Select a subdistrict</option>
          {subdis?.map((data) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="fw-bold">Wards</label>
        <select className="form-select">
          <option>Select a ward</option>
          {wards.map((data) => (
            <option key={data.id} value={data.id}>
              {data?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
