import { Box, TextField, FormControl } from '@mui/material';

type Props = {
  search: string;
  onChangeSearch: (newSearch: string) => void;
}

const Search = ({ search, onChangeSearch }: Props) => {
  const handleChangeSearch = (e: any) => {
    console.log(e.target.value)
    onChangeSearch(e.target.value)
    return;
  }

  return (
    <Box sx={{ pb: 5 }}>
      <FormControl sx={{ width: '200px' }}>
        <TextField onKeyDown={(e: any) => { handleChangeSearch(e) }
        } id="outlined-basic" label="Search Title" variant="outlined"
        />
      </FormControl>
    </Box>
  )
}
export default Search;