import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, FileText, CheckSquare } from 'lucide-react';

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
    { id: 2, name: 'Retail Park B', status: 'Occupied', nextAction: 'Vacate', nextActionDate: '2023-10-01' },
    { id: 3, name: 'Mall C', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-20' },
  ]);

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
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.nextActionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Office Building X', amount: 5000, status: 'Pending', dueDate: '2023-09-30' },
    { id: 2, property: 'Warehouse Y', amount: 7500, status: 'Paid', dueDate: '2023-09-15' },
    { id: 3, property: 'Retail Store Z', amount: 3000, status: 'Overdue', dueDate: '2023-09-01' },
  ]);

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
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.dueDate}</td>
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
  primaryColor: "#3B82F6",
  secondaryColor: "#93C5FD",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyOccupation",
        label: "Property Occupation",
        description: "Manage property occupation cycles",
        icon: Home
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Handle business rates invoices",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#3B82F6", "#93C5FD", "#BFDBFE"],
        data: [
          { name: 'Vacant', value: 30 },
          { name: 'Occupied', value: 50 },
          { name: 'In Transition', value: 20 },
        ]
      },
      invoiceStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#3B82F6"],
        data: [
          { name: 'Pending', count: 15 },
          { name: 'Paid', count: 25 },
          { name: 'Overdue', count: 5 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      propertyOccupationCycles: {
        type: "line",
        dataKeys: ["cycles"],
        colors: ["#3B82F6"],
        data: [
          { month: 'Jan', cycles: 10 },
          { month: 'Feb', cycles: 12 },
          { month: 'Mar', cycles: 8 },
          { month: 'Apr', cycles: 15 },
        ]
      },
      invoiceProcessingEfficiency: {
        type: "bar",
        dataKeys: ["efficiency"],
        colors: ["#93C5FD"],
        data: [
          { week: 'Week 1', efficiency: 85 },
          { week: 'Week 2', efficiency: 90 },
          { week: 'Week 3', efficiency: 88 },
          { week: 'Week 4', efficiency: 92 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Major Retail Chain", industry: "Retail" },
    { id: "client2", name: "Office Space Inc.", industry: "Commercial Real Estate" },
    { id: "client3", name: "Warehouse Solutions", industry: "Logistics" },
  ],
  features: {
    propertyOccupationManagement: true,
    invoiceProcessing: true,
    dataImport: true,
    reporting: true,
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  propertyOccupation: PropertyOccupationComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  propertyTypes: ['Retail', 'Office', 'Warehouse', 'Shopping Center'],
  occupationStatuses: ['Vacant', 'Occupied', 'In Transition'],
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};