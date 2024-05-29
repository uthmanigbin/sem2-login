'use client'
import { useEffect, useState } from "react";

interface DataItem {
  apakstips: string;
  id: number;
  komentari: string;
  nosaukums: string;
  skaits: number;
  tips: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/columns/inventars.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nosaukums</th>
            <th className="py-2 px-4 border-b">Tips</th>
            <th className="py-2 px-4 border-b">Apakstips</th>
            <th className="py-2 px-4 border-b">Skaits</th>
            <th className="py-2 px-4 border-b">Komentāri</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.nosaukums}</td>
              <td className="py-2 px-4 border-b">{item.tips}</td>
              <td className="py-2 px-4 border-b">{item.apakstips}</td>
              <td className="py-2 px-4 border-b">{item.skaits}</td>
              <td className="py-2 px-4 border-b">{item.komentari}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
