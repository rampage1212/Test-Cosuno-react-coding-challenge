import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Company } from '../types'

type Props = {
  companies: Company[];
}

const CompanyList = ({ companies }: Props) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Firt Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Family</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.length && companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.id + 1}</TableCell>
              <TableCell>
                <Avatar variant="square"
                  src={company.imageUrl}
                  sx={{ width: '48px', height: '48px' }}
                >
                </Avatar>
              </TableCell>
              <TableCell>{company.firstName}</TableCell>
              <TableCell>{company.lastName}</TableCell>
              <TableCell>{company.title}</TableCell>
              <TableCell>{company.family}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  )
}

export default CompanyList;