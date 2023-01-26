import axios from "axios";
import { http } from "./Http.service";

export const getCarsData = async (queryOptions: any) => {
  const { sortModel, searchTerm, filterModel } = queryOptions;
  const { pageNumber, pageSize } = queryOptions.pagination;

  let api = `cars/?page=${pageNumber + 1}&limit=${pageSize}`;

  if (sortModel.length > 0) {
    const { field, sort } = sortModel[0];
    const sortValue = sort.toUpperCase();
    api += `&field=${field}&sortBy=${sortValue}`;
  }

  if (searchTerm !== "") {
    console.log(searchTerm);
    api = `cars/search?searchBy=${searchTerm}&page=${1}&limit=${pageSize}&`;
  }

  console.log(filterModel);
  if (filterModel != "") {
    api = `cars/?page=${pageNumber}&limit=${pageSize}&${filterModel}`;
  }
 
  const data = await http("get", api);
  console.log(data)
  return data;
};
