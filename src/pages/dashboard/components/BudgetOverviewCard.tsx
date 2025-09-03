import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { BudgetSummary } from '@/types/dashboard';

interface BudgetOverviewCardProps {
  budgetSummary: BudgetSummary;
  isLoading?: boolean;
}

const BudgetOverviewCard: React.FC<BudgetOverviewCardProps> = ({ 
  budgetSummary, 
  isLoading = false 
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const utilizationPercentage = (budgetSummary.utilized / budgetSummary.total) * 100;
  const remainingPercentage = 100 - utilizationPercentage;

  if (isLoading) {
    return (
      <div className=\"bg-white rounded-lg shadow-md p-6 animate-pulse\">
        <div className=\"h-4 bg-gray-200 rounded w-1/3 mb-4\"></div>
        <div className=\"h-8 bg-gray-200 rounded w-1/2 mb-2\"></div>
        <div className=\"h-4 bg-gray-200 rounded w-full mb-4\"></div>
        <div className=\"h-2 bg-gray-200 rounded w-full\"></div>
      </div>
    );
  }

  return (
    <div className=\"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200\">
      <div className=\"flex items-center justify-between mb-4\">
        <h3 className=\"text-lg font-semibold text-gray-800\">Budget Overview</h3>
        <div className=\"p-2 bg-blue-100 rounded-lg\">
          <DollarSign className=\"h-6 w-6 text-blue-600\" />
        </div>
      </div>

      <div className=\"space-y-4\">
        {/* Total Budget */}
        <div>
          <div className=\"flex items-center justify-between mb-1\">
            <span className=\"text-sm font-medium text-gray-600\">Total Budget</span>
            <span className=\"text-2xl font-bold text-gray-900\">
              {formatCurrency(budgetSummary.total)}
            </span>
          </div>
        </div>

        {/* Utilization Progress */}
        <div>
          <div className=\"flex items-center justify-between mb-2\">
            <span className=\"text-sm font-medium text-gray-600\">Utilization</span>
            <span className=\"text-sm font-semibold text-gray-800\">
              {utilizationPercentage.toFixed(1)}%
            </span>
          </div>
          <div className=\"w-full bg-gray-200 rounded-full h-3\">
            <div 
              className=\"bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300\"
              style={{ width: `${utilizationPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Utilized and Remaining */}
        <div className=\"grid grid-cols-2 gap-4\">
          <div className=\"text-center p-3 bg-green-50 rounded-lg\">
            <div className=\"flex items-center justify-center mb-1\">
              <TrendingUp className=\"h-4 w-4 text-green-600 mr-1\" />
              <span className=\"text-xs font-medium text-green-600\">Utilized</span>
            </div>
            <span className=\"text-lg font-bold text-green-700\">
              {formatCurrency(budgetSummary.utilized)}
            </span>
          </div>
          
          <div className=\"text-center p-3 bg-orange-50 rounded-lg\">
            <div className=\"flex items-center justify-center mb-1\">
              <TrendingDown className=\"h-4 w-4 text-orange-600 mr-1\" />
              <span className=\"text-xs font-medium text-orange-600\">Remaining</span>
            </div>
            <span className=\"text-lg font-bold text-orange-700\">
              {formatCurrency(budgetSummary.remaining)}
            </span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className=\"pt-2 border-t border-gray-100\">
          <div className=\"flex items-center justify-between\">
            <span className=\"text-xs text-gray-500\">Budget Status</span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${\n              utilizationPercentage > 90 \n                ? 'bg-red-100 text-red-700' \n                : utilizationPercentage > 75 \n                ? 'bg-yellow-100 text-yellow-700' \n                : 'bg-green-100 text-green-700'\n            }`}>
              {utilizationPercentage > 90 ? 'Critical' : utilizationPercentage > 75 ? 'Warning' : 'Healthy'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOverviewCard;