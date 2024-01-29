import { EventProps, FilterProps } from "../types/custom-types";

export const KumpulanKota = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Medan",
    "Semarang",
    "Denpasar",
    "Makassar",
    "Palembang",
    "Tangerang",
    "Bekasi",
    "Depok",
    "Malang",
    "Padang",
    "Bogor",
    "Bandar Lampung",
    "Batam",
    "Pekanbaru",
    "Pontianak",
    "Balikpapan",
    "Banjarmasin",
    "Manado",
    "Ambon",
    "Jayapura",
    "Palu",
    "Mataram",
    "Kupang",
    "Gorontalo",
    "Madiun",
    "Magelang",
    "Cirebon",
    "Jambi",
    "Bengkulu",
    "Samarinda",
    "Tarakan",
    "Palangkaraya",
    "Banjarbaru",
    "Singkawang",
    "Sukabumi",
    "Cilegon",
    "Cimahi",
    "Purwokerto",
    "Salatiga",
    "Probolinggo",
    "Binjai",
    "Tanjung Pinang",
    "Dumai",
    "Pematangsiantar",
    "Tegal"
    ];

export const kumpulanKategori = [
            "Musik",
            "Olahraga",
            "Seni dan Budaya",
            "Pendidikan",
            "Teknologi"
        ];

export const generateCarImageUrl = (car: EventProps, angle?: string) => {
            const url = new URL('https://cdn.imagin.studio/getimage');
        
            const { make, year, model } = car;
        
            url.searchParams.append('customer', 'hrjavascript-mastery');
            url.searchParams.append('make', make)
            url.searchParams.append('modelFamily', model.split(' ')[0]);
            url.searchParams.append('zoomType', 'fullscreen')
            url.searchParams.append('modelYear', `${year}`)
            url.searchParams.append('angle', `${angle}`)
        
            return `${url}`;
        }

        export async function fetchEvent(filters: FilterProps) {
          const { manufacturer, year, model, fuel, limit} = filters;
      
         const headers = {
              'X-RapidAPI-Key': '3f92d248e4msh9717c1b36bc2fadp1afa34jsn78ee329f2e15',
              'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
         } 
         const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
          headers: headers,
      });
      const result = await response.json();
      
      return result;
      }