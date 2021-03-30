import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function TrierDossiers({ trierDossiers }) {
  // état du tri des dossiers
  const [trier, setTrier] = trierDossiers;

  return (
    <div className="TriDossiers">
      <InputLabel id="demo-simple-select-label">Trier Les Dossiers</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={trier}
        defaultValue={0}
        onChange={(e) => setTrier(e.target.value)}
        >
        <MenuItem value={0}> Date de Modification Descendante </MenuItem>
        <MenuItem value={1}> Nom de Dossier Alphabétique Ascendant </MenuItem>
        <MenuItem value={2}> Nom de Dossier Alphabétique Descendant </MenuItem>
      </Select>
    </div>
  );
}