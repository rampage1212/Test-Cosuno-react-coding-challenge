import React from 'react';
import './App.css';
import { useState, useEffect, useMemo } from 'react';
import CompanyList from './components/CompanyList';
import Search from './components/Search';
import { fetchCompanies } from './service/api'
import { Company } from './types'

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState<string>('')

  const searchedCompanies = useMemo(() => companies.filter(company => {
    if (search && !company.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [companies, search])

  const handleChangeSearch = (newSearch: string) => {
    setSearch(newSearch)
  }

  useEffect(() => {
    fetchCompanies().then(res => {
      setCompanies(res);
    })
  }, [])

  return (
    <main>
      <h1>Companies</h1>
      <Search search={search} onChangeSearch={handleChangeSearch} />
      <CompanyList companies={searchedCompanies} />
    </main>
  );
}

export default App;
