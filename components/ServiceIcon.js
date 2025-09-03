import IconAgenticAI from './icons/IconAgenticAI';
import IconRPA from './icons/IconRPA';
import IconManaged from './icons/IconManaged';
import IconITSM from './icons/IconITSM';
import IconFinance from './icons/IconFinance';
import IconSupply from './icons/IconSupply';
import IconAnalytics from './icons/IconAnalytics';

const ICONS = {
  'agentic-ai': IconAgenticAI,
  'rpa': IconRPA,
  'managed-automation': IconManaged,
  'itsm-freshservice': IconITSM,
  'finance-process-consulting': IconFinance,
  'supply-chain-automation': IconSupply,
  'data-analytics-solutions': IconAnalytics,
};

export default function ServiceIcon({ slug, className }) {
  const Icon = ICONS[slug] || IconAgenticAI;
  return <Icon className={className} />;
}
