export interface DashboardData {
  totalBudget: number;
  budgetUtilized: number;
  pendingApprovals: number;
  processedPayments: number;
  availableFunds: number;
  monthlyTrends: MonthlyTrend[];
}

export interface MonthlyTrend {
  month: string; // e.g., "Jan 2025"
  budget: number;
  expenditure: number;
  variance: number;
}

export interface BudgetSummary {
  total: number;
  utilized: number;
  remaining: number;
}

export interface PaymentStatistics {
  totalProcessed: number;
  pending: number;
  avgProcessingTime: number; // in hours
  successRate: number; // percentage
}

export interface TrendData {
  label: string; // month or department name
  value: number;
}

export interface DateRange {
  start: Date;
  end: Date;
}

export enum ModuleType {
  MAIN_TREASURY = 'MAIN_TREASURY',
  BUDGET_MANAGEMENT = 'BUDGET_MANAGEMENT',
  PAYMENT_PROCESSING = 'PAYMENT_PROCESSING',
  REPORTING = 'REPORTING'
}

export enum Permission {
  READ = 'read',
  write = 'write',
  admin = 'admin'
}