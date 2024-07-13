import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, FileText, Mail, Briefcase } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const PropertyOccupationComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Shopping Center A', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-15' },
    { id: 2, name: 'Retail Space B', status: 'Occupied', nextAction: 'Vacate', nextActionDate: '2023-10-01' },
    { id: 3, name: 'Office Building C', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-20' },
  ]);

  const handleActionClick = (id: number) => {
    setProperties(prevProperties =>
      prevProperties.map(prop =>
        prop.id === id
          ? {
              ...prop,
              status: prop.status === 'Vacant' ? 'Occupied' : 'Vacant',
              nextAction: prop.nextAction === 'Occupy' ? 'Vacate' : 'Occupy',
              nextActionDate: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0]
            }
          : prop
      )
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Occupation Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Next Action Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.nextActionDate}</td>
              <td>
                <button
                  onClick={() => handleActionClick(property.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {property.nextAction}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Shopping Center A', amount: 5000, status: 'Pending', dueDate: '2023-09-30' },
    { id: 2, property: 'Retail Space B', amount: 3500, status: 'Paid', dueDate: '2023-09-15' },
    { id: 3, property: 'Office Building C', amount: 7500, status: 'Overdue', dueDate: '2023-09-01' },
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setInvoices(prevInvoices =>
      prevInvoices.map(invoice =>
        invoice.id === id ? { ...invoice, status: newStatus } : invoice
      )
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.dueDate}</td>
              <td>
                <select
                  value={invoice.status}
                  onChange={(e) => handleStatusChange(invoice.id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "QuoinStone Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#0056b3",
  secondaryColor: "#17a2b8",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyOccupation",
        label: "Property Occupation",
        description: "Manage property occupation cycles",
        icon: Briefcase
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Process and track invoices",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatusDistribution: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#0056b3", "#17a2b8", "#ffc107"],
        data: [
          { name: 'Vacant', value: 30 },
          { name: 'Occupied', value: 50 },
          { name: 'In Transition', value: 20 },
        ]
      },
      invoiceStatusOverview: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#28a745", "#dc3545", "#ffc107"],
        data: [
          { status: 'Paid', count: 45 },
          { status: 'Pending', count: 30 },
          { status: 'Overdue', count: 15 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      occupancyRateOverTime: {
        type: "line",
        dataKeys: ["rate"],
        colors: ["#0056b3"],
        data: [
          { month: 'Jan', rate: 75 },
          { month: 'Feb', rate: 78 },
          { month: 'Mar', rate: 80 },
          { month: 'Apr', rate: 82 },
          { month: 'May', rate: 85 },
        ]
      },
      invoiceProcessingEfficiency: {
        type: "bar",
        dataKeys: ["efficiency"],
        colors: ["#17a2b8"],
        data: [
          { week: 'Week 1', efficiency: 85 },
          { week: 'Week 2', efficiency: 88 },
          { week: 'Week 3', efficiency: 90 },
          { week: 'Week 4', efficiency: 92 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Major Retail Chain", industry: "Retail" },
    { id: "client2", name: "Office Space Inc.", industry: "Commercial Real Estate" },
    { id: "client3", name: "Shopping Mall Group", industry: "Retail" },
  ],
  features: {
    propertyOccupationManagement: true,
    invoiceProcessingAutomation: true,
    clientCommunication: true,
    reportGeneration: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  propertyOccupation: PropertyOccupationComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  propertyTypes: ['Shopping Center', 'Retail Space', 'Office Building'],
  occupationCycleDuration: 3, // months
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  communicationChannels: ['Email', 'Phone', 'In-person']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};
