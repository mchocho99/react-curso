import React, { useMemo, useState } from 'react'

const sales = [
  { id: 1, seller: 'Ana', amount: 1500 },
  { id: 2, seller: 'Carlos', amount: 800 },
  { id: 3, seller: 'Ana', amount: 2200 },
  { id: 4, seller: 'María', amount: 950 },
  { id: 5, seller: 'Carlos', amount: 1100 },
  { id: 6, seller: 'Ana', amount: 1800 },
  { id: 7, seller: 'María', amount: 2500 },
  { id: 8, seller: 'Carlos', amount: 600 },
  { id: 9, seller: 'María', amount: 1300 },
  { id: 10, seller: 'Ana', amount: 900 },
]

const SalesStats = () => {
  const [selectedSeller, setSelectedSeller] = useState('all')

  const options = sales.reduce((acc, sale) => {
    if (!acc.includes(sale.seller)) {
      acc.push(sale.seller)
    }

    return acc
  }, [] as string[])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeller(e.target.value)
  }

  const filteredSales = useMemo(() => {
    if (selectedSeller === 'all') {
      return sales
    }

    return sales.filter((sale) => sale.seller === selectedSeller)
  }, [selectedSeller])

  const stats = useMemo(() => {
    const total = filteredSales.reduce((acc, sale) => acc + sale.amount, 0)

    return {
      total,
      average: total / filteredSales.length,
      most: filteredSales.reduce((acc, sale) => {
        if (sale.amount > acc) {
          acc = sale.amount
        }

        return acc
      }, 0),
      less: filteredSales.reduce((acc, sale) => {
        if (sale.amount < acc) {
          acc = sale.amount
        }

        return acc
      }, Number.MAX_VALUE),
    }
  }, [filteredSales])

  return (
    <>
      {options && options.length > 0 && (
        <select id="sellers" name="sellers" value={selectedSeller} onChange={handleChange}>
          <option value="all">Todos</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {filteredSales && filteredSales.length > 0 && (
        <>
          <h2>Listado de Ventas:</h2>
          {filteredSales.map((sale) => (
            <div key={sale.id}>
              Id: {sale.id} Vendedor: {sale.seller} Monto: ${sale.amount}
            </div>
          ))}
          <h2>Total de ventas:</h2>${stats.total}
          <h2>Promedio por venta:</h2>${stats.average.toFixed(2)}
          <h2>Venta mas alta:</h2>${stats.most.toFixed(2)}
          <h2>Venta mas baja:</h2>${stats.less.toFixed(2)}
          <h2>Cantidad de ventas:</h2>
          {filteredSales.length}
        </>
      )}
    </>
  )
}

export default SalesStats
