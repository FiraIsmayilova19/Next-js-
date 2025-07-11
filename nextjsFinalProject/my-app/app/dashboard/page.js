'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Chart from 'chart.js/auto';
import '@/public/styles/dashboard.css';

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');
  const [stats, setStats] = useState({ total: 0, average: 0, last: 0 });
  const [section, setSection] = useState('expenses');

  const [incomes, setIncomes] = useState([]);
  const [incomeTitle, setIncomeTitle] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeDate, setIncomeDate] = useState('');

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const expensesChartRef = useRef(null);
  const incomesChartRef = useRef(null);
  const summaryChartRef = useRef(null);

  const expensesChartInstance = useRef(null);
  const incomesChartInstance = useRef(null);
  const summaryChartInstance = useRef(null);

const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  if (!token || !userId) {
    router.push('/auth/login');
  } else {
    fetchExpenses();
    fetchIncomes();
    fetchUsername(userId);
  }
}, [filter]);

async function fetchUsername(userId) {
  try {
    const res = await fetch(`/api/user/${userId}`);
    const data = await res.json();
    if (res.ok) {
      setUsername(data.username);
    } else {
      setUsername('Bilinməyən istifadəçi');
    }
  } catch (err) {
    console.error('İstifadəçi adı alınmadı:', err);
    setUsername('Xəta baş verdi');
  }
}


  function calculateStats(data) {
    if (!data.length) return { total: 0, average: 0, last: 0 };
    const total = data.reduce((sum, e) => sum + e.amount, 0);
    const average = (total / data.length).toFixed(2);
    const last = data[data.length - 1]?.amount;
    return { total, average, last };
  }

  function drawChart(ref, chartInstanceRef, data, label, color) {
    const ctx = ref.current;
    if (!ctx) return;

    const grouped = {};
    data.forEach(({ date, amount }) => {
      const month = date.slice(0, 7);
      grouped[month] = (grouped[month] || 0) + amount;
    });

    const labels = Object.keys(grouped).sort();
    const values = labels.map(month => grouped[month]);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label,
          data: values,
          backgroundColor: color,
          borderRadius: 6,
          barThickness: 40,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  function drawSummaryChart() {
    const ctx = summaryChartRef.current;
    if (!ctx) return;

    const expenseTotal = expenses.reduce((sum, e) => sum + e.amount, 0);
    const incomeTotal = incomes.reduce((sum, e) => sum + e.amount, 0);

    setTotalExpense(expenseTotal);
    setTotalIncome(incomeTotal);

    if (summaryChartInstance.current) {
      summaryChartInstance.current.destroy();
    }

    summaryChartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Xərclər', 'Gəlirlər'],
        datasets: [{
          data: [expenseTotal, incomeTotal],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

async function fetchExpenses() {
  const userId = localStorage.getItem('userId');
  if (!userId) return;

  const url = filter
    ? `/api/expenses/${userId}?date=${filter}`
    : `/api/expenses/${userId}`;

  const res = await fetch(url);
  const data = await res.json();

  setExpenses(data);

  if (section === 'expenses') {
    setStats(calculateStats(data));
    drawChart(expensesChartRef, expensesChartInstance, data, 'Aylıq Xərclər', 'rgba(255, 99, 132, 0.6)');
  }
}


  async function fetchIncomes() {
    const userId = localStorage.getItem('userId');
    if (!userId) return;
    const res = await fetch(`/api/incomes/${userId}`);
    const data = await res.json();
    setIncomes(data);
    if (section === 'incomes') {
      setStats(calculateStats(data));
      drawChart(incomesChartRef, incomesChartInstance, data, 'Aylıq Gəlirlər', 'rgba(75, 192, 192, 0.6)');
    }
  }

  async function addExpense(e) {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!title || !amount || !date || !userId) return;
    const res = await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, amount: parseFloat(amount), date, userId: parseInt(userId) })
    });
    if (res.ok) {
      setTitle('');
      setAmount('');
      setDate('');
      fetchExpenses();
    }
  }

  async function addIncome(e) {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!incomeTitle || !incomeAmount || !incomeDate || !userId) return;
    const res = await fetch('/api/incomes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: incomeTitle,
        amount: parseFloat(incomeAmount),
        date: incomeDate,
        userId: parseInt(userId)
      })
    });
    if (res.ok) {
      setIncomeTitle('');
      setIncomeAmount('');
      setIncomeDate('');
      fetchIncomes();
    }
  }

  useEffect(() => {
    if (section === 'expenses') {
      setStats(calculateStats(expenses));
      drawChart(expensesChartRef, expensesChartInstance, expenses, 'Aylıq Xərclər', 'rgba(255, 99, 132, 0.6)');
    } else if (section === 'incomes') {
      setStats(calculateStats(incomes));
      drawChart(incomesChartRef, incomesChartInstance, incomes, 'Aylıq Gəlirlər', 'rgba(75, 192, 192, 0.6)');
    } else if (section === 'summary') {
      drawSummaryChart();
    }
  }, [section]);

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    router.push('/login');
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={() => setSection('summary')} style={{ cursor: 'pointer' }}>Ümumi dioqram</li>
          <li onClick={() => setSection('expenses')} style={{ cursor: 'pointer' }}>Xərclər</li>
          <li onClick={() => setSection('incomes')} style={{ cursor: 'pointer' }}>Gəlirlər</li>
          <li onClick={logout} style={{ cursor: 'pointer' }}>Çıxış</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>{section === 'expenses' ? 'Xərclər Paneli' : section === 'incomes' ? 'Gəlirlər Paneli' : 'Dashboard'}</h1>
        <p>İstifadəçi: {username}</p>
        </header>

        {section === 'summary' && (
          <>
            <div className="dashboard-chart" style={{ height: '400px' }}>
              <canvas ref={summaryChartRef}></canvas>
            </div>
            <div className="dashboard-stats">
              <div className="card">Toplam Xərc: ${totalExpense}</div>
              <div className="card">Toplam Gəlir: ${totalIncome}</div>
            </div>
            {totalExpense > totalIncome && (
              <div style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#ffe0e0',
                borderRadius: '8px',
                color: '#d40000',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                ❗ Xərclərinizə diqqət edin, limiti aşmısınız.
              </div>
            )}
          </>
        )}

        {section !== 'summary' && (
          <>
            <div className="dashboard-stats">
              <div className="card">Toplam: ${stats.total}</div>
              <div className="card">Orta Məbləğ: ${stats.average}</div>
              <div className="card">Son {section === 'expenses' ? 'Xərc' : 'Gəlir'}: ${stats.last}</div>
            </div>

            <div className="dashboard-chart" style={{ display: section === 'expenses' ? 'block' : 'none', height: '400px' }}>
              <canvas ref={expensesChartRef}></canvas>
            </div>

            <div className="dashboard-chart" style={{ display: section === 'incomes' ? 'block' : 'none', height: '400px' }}>
              <canvas ref={incomesChartRef}></canvas>
            </div>
          </>
        )}

        {section === 'expenses' && (
          <form onSubmit={addExpense} className="dashboard-form">
            <input type="text" placeholder="Başlıq" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="number" placeholder="Məbləğ" value={amount} onChange={e => setAmount(e.target.value)} required />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
            <button type="submit">Əlavə et</button>
          </form>
        )}

        {section === 'incomes' && (
          <form onSubmit={addIncome} className="dashboard-form">
            <input type="text" placeholder="Başlıq" value={incomeTitle} onChange={e => setIncomeTitle(e.target.value)} required />
            <input type="number" placeholder="Məbləğ" value={incomeAmount} onChange={e => setIncomeAmount(e.target.value)} required />
            <input type="date" value={incomeDate} onChange={e => setIncomeDate(e.target.value)} required />
            <button type="submit">Əlavə et</button>
          </form>
        )}

        {section !== 'summary' && (
          <input type="month" value={filter} onChange={e => setFilter(e.target.value)} className="month-filter" />
        )}

        <ul className="expense-list">
          {(section === 'expenses' ? expenses : section === 'incomes' ? incomes : []).map(e => (
            <li key={e.id}>{e.date} - {e.title}: ${e.amount}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
