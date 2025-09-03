import { DashboardData, BudgetSummary, PaymentStatistics, TrendData, DateRange } from "@/types/dashboard";

class DashboardService {
  private baseUrl = process.env.REACT_APP_API_URL || '/api';

  async getDashboardData(dateRange?: DateRange): Promise<DashboardData> {
    const params = new URLSearchParams();
    if (dateRange) {
      params.append('start', dateRange.start.toISOString());
      params.append('end', dateRange.end.toISOString());
    }
    
    const url = `${this.baseUrl}/dashboard${params.toString() ? '?' + params.toString() : ''}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      // Return mock data for development
      return this.getMockDashboardData();
    }
  }

  async getBudgetSummary(): Promise<BudgetSummary> {
    try {
      const response = await fetch(`${this.baseUrl}/dashboard/budget-summary`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      // Return mock data for development
      return {
        total: 5000000,
        utilized: 3200000,
        remaining: 1800000
      };
    }
  }

  async getPaymentStatistics(): Promise<PaymentStatistics> {
    try {
      const response = await fetch(`${this.baseUrl}/dashboard/payment-stats`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      // Return mock data for development
      return {
        totalProcessed: 1247,
        pending: 23,
        avgProcessingTime: 4.2,
        successRate: 98.5
      };
    }
  }

  async getFinancialTrends(period: string): Promise<TrendData[]> {
    try {
      const response = await fetch(`${this.baseUrl}/dashboard/trends?period=${period}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      // Return mock data for development
      return [
        { label: 'Jan 2025', value: 450000 },
        { label: 'Feb 2025', value: 520000 },
        { label: 'Mar 2025', value: 480000 },
        { label: 'Apr 2025', value: 610000 },
        { label: 'May 2025', value: 580000 },
        { label: 'Jun 2025', value: 650000 }
      ];
    }
  }

  private getMockDashboardData(): DashboardData {
    return {
      totalBudget: 5000000,
      budgetUtilized: 3200000,
      pendingApprovals: 23,
      processedPayments: 1247,
      availableFunds: 1800000,
      monthlyTrends: [
        {
          month: 'Jan 2025',
          budget: 500000,
          expenditure: 450000,
          variance: 50000
        },
        {
          month: 'Feb 2025',
          budget: 550000,
          expenditure: 520000,
          variance: 30000
        },
        {
          month: 'Mar 2025',
          budget: 500000,
          expenditure: 480000,
          variance: 20000
        },
        {
          month: 'Apr 2025',
          budget: 600000,
          expenditure: 610000,
          variance: -10000
        },
        {
          month: 'May 2025',
          budget: 550000,
          expenditure: 580000,
          variance: -30000
        },
        {
          month: 'Jun 2025',
          budget: 650000,
          expenditure: 650000,
          variance: 0
        }
      ]
    };
  }
}

export const dashboardService = new DashboardService();