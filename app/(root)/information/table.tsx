// import DataTable from "@/components/deadtome";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Tablee = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead className="w-[100px]">Nosaukums</TableHead>
            <TableHead>Tips</TableHead>
            <TableHead>Apakstips</TableHead>
            <TableHead>Skaits</TableHead>
            <TableHead>Komentāri</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Mehāniskie svari QWS</TableCell>
            <TableCell>svarid</TableCell>
            <TableCell>mehāniskie svari</TableCell>
            <TableCell>5</TableCell>
            <TableCell>Darbojas uz 3 AAA tipa baterijām</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Tablee;
