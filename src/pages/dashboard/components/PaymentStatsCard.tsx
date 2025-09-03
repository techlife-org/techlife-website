import React from 'react';
import { CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { PaymentStatistics } from '@/types/dashboard';

interface PaymentStatsCardProps {
  paymentStats: PaymentStatistics;
  isLoading?: boolean;
}

const PaymentStatsCard: React.FC<PaymentStatsCardProps> = ({ 
  paymentStats, 
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <div className=\"bg-white rounded-lg shadow-md p-6 animate-pulse\">
        <div className=\"h-4 bg-gray-200 rounded w-1/3 mb-4\"></div>
        <div className=\"space-y-4\">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className=\"flex items-center justify-between\">
              <div className=\"h-4 bg-gray-200 rounded w-1/2\"></div>
              <div className=\"h-6 bg-gray-200 rounded w-1/4\"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 95) return 'text-green-600 bg-green-100';
    if (rate >= 90) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getProcessingTimeColor = (time: number) => {
    if (time <= 2) return 'text-green-600';
    if (time <= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className=\"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200\">
      <div className=\"flex items-center justify-between mb-6\">
        <h3 className=\"text-lg font-semibold text-gray-800\">Payment Statistics</h3>
        <div className=\"p-2 bg-green-100 rounded-lg\">
          <CreditCard className=\"h-6 w-6 text-green-600\" />
        </div>
      </div>

      <div className=\"space-y-4\">
        {/* Total Processed */}
        <div className=\"flex items-center justify-between p-3 bg-blue-50 rounded-lg\">
          <div className=\"flex items-center\">
            <CheckCircle className=\"h-5 w-5 text-blue-600 mr-3\" />
            <span className=\"text-sm font-medium text-gray-700\">Total Processed</span>
          </div>
          <span className=\"text-xl font-bold text-blue-700\">
            {paymentStats.totalProcessed.toLocaleString()}
          </span>
        </div>

        {/* Pending Approvals */}
        <div className=\"flex items-center justify-between p-3 bg-orange-50 rounded-lg\">
          <div className=\"flex items-center\">
            <AlertCircle className=\"h-5 w-5 text-orange-600 mr-3\" />
            <span className=\"text-sm font-medium text-gray-700\">Pending Approvals</span>
          </div>
          <span className=\"text-xl font-bold text-orange-700\">
            {paymentStats.pending}
          </span>
        </div>

        {/* Average Processing Time */}
        <div className=\"flex items-center justify-between p-3 bg-purple-50 rounded-lg\">
          <div className=\"flex items-center\">
            <Clock className=\"h-5 w-5 text-purple-600 mr-3\" />
            <span className=\"text-sm font-medium text-gray-700\">Avg Processing Time</span>
          </div>
          <span className={`text-xl font-bold ${getProcessingTimeColor(paymentStats.avgProcessingTime)}`}>
            {paymentStats.avgProcessingTime.toFixed(1)}h
          </span>
        </div>

        {/* Success Rate */}
        <div className=\"flex items-center justify-between p-3 bg-gray-50 rounded-lg\">
          <div className=\"flex items-center\">
            <div className=\"h-5 w-5 rounded-full bg-green-500 mr-3 flex items-center justify-center\">
              <CheckCircle className=\"h-3 w-3 text-white\" />
            </div>
            <span className=\"text-sm font-medium text-gray-700\">Success Rate</span>
          </div>
          <div className=\"flex items-center\">
            <span className=\"text-xl font-bold text-gray-800 mr-2\">
              {paymentStats.successRate.toFixed(1)}%
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getSuccessRateColor(paymentStats.successRate)}`}>
              {paymentStats.successRate >= 95 ? 'Excellent' : paymentStats.successRate >= 90 ? 'Good' : 'Needs Attention'}
            </span>
          </div>
        </div>
      </div>

      {/* Performance Indicators */}
      <div className=\"mt-6 pt-4 border-t border-gray-100\">
        <div className=\"grid grid-cols-2 gap-4 text-center\">
          <div>
            <div className=\"text-xs text-gray-500 mb-1\">Processing Efficiency</div>
            <div className={`text-sm font-semibold ${\n              paymentStats.avgProcessingTime <= 2 ? 'text-green-600' :\n              paymentStats.avgProcessingTime <= 6 ? 'text-yellow-600' : 'text-red-600'\n            }`}>
              {paymentStats.avgProcessingTime <= 2 ? 'Excellent' :\n               paymentStats.avgProcessingTime <= 6 ? 'Average' : 'Slow'}
            </div>\n          </div>\n          <div>\n            <div className=\"text-xs text-gray-500 mb-1\">Quality Score</div>\n            <div className={`text-sm font-semibold ${\n              paymentStats.successRate >= 95 ? 'text-green-600' :\n              paymentStats.successRate >= 90 ? 'text-yellow-600' : 'text-red-600'\n            }`}>\n              {Math.round(paymentStats.successRate)}/100\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default PaymentStatsCard;