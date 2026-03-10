import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { CalendarIcon, ClipboardIcon, LightningIcon, EyeIcon, CheckCircleIcon, LightbulbIcon } from '@/components/admin/Icons';

interface EditorialItem {
  id: string;
  title: string;
  status: 'backlog' | 'in_progress' | 'review' | 'published';
  priority: 'high' | 'medium' | 'low';
  targetWordCount: number;
  assignee?: string;
  dueDate?: string;
}

function loadEditorialPlan(): EditorialItem[] {
  try {
    const dataPath = join(process.cwd(), 'data', 'editorial-plan.json');
    if (!existsSync(dataPath)) {
      return [
        {
          id: '1',
          title: 'Prix déménagement Paris 2026',
          status: 'backlog',
          priority: 'high',
          targetWordCount: 1500,
        },
        {
          id: '2',
          title: 'Guide complet déménagement étudiant',
          status: 'in_progress',
          priority: 'medium',
          targetWordCount: 1200,
        },
        {
          id: '3',
          title: 'Checklist déménagement entreprise',
          status: 'review',
          priority: 'high',
          targetWordCount: 1800,
        },
      ];
    }
    return JSON.parse(readFileSync(dataPath, 'utf-8'));
  } catch {
    return [];
  }
}

export default function AdminEditorialPage() {
  const items = loadEditorialPlan();
  
  const statusColumns = [
    { status: 'backlog', label: 'Backlog', Icon: ClipboardIcon, color: 'gray' },
    { status: 'in_progress', label: 'En cours', Icon: LightningIcon, color: 'blue' },
    { status: 'review', label: 'Review', Icon: EyeIcon, color: 'yellow' },
    { status: 'published', label: 'Publié', Icon: CheckCircleIcon, color: 'green' },
  ] as const;
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-800 text-v4-text flex items-center gap-3">
          <CalendarIcon className="w-8 h-8 text-accent" />
          Calendrier Éditorial
        </h1>
        <p className="font-sans text-v4-text-secondary mt-2">Gestion du workflow de production de contenu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {statusColumns.map(col => {
          const count = items.filter(item => item.status === col.status).length;
          const Icon = col.Icon;
          return (
            <div key={col.status} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
              <div className="flex items-center gap-2 font-sans text-sm font-600 text-v4-text-secondary mb-2">
                <Icon className="w-4 h-4 text-accent" />
                {col.label}
              </div>
              <div className="font-heading text-3xl font-800 text-v4-text mt-1">{count}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {statusColumns.map(col => {
          const columnItems = items.filter(item => item.status === col.status);
          const Icon = col.Icon;
          
          return (
            <div key={col.status} className="bg-white/60 backdrop-blur-sm rounded-2xl border border-v4-border-light p-6">
              <h3 className="flex items-center gap-2 font-heading font-700 text-v4-text mb-4">
                <Icon className="w-5 h-5 text-accent" />
                {col.label} ({columnItems.length})
              </h3>
              
              <div className="space-y-3">
                {columnItems.length === 0 ? (
                  <p className="font-sans text-sm text-v4-text-muted italic">Aucun article</p>
                ) : (
                  columnItems.map(item => (
                    <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-accent hover:shadow-md transition-all duration-300">
                      <h4 className="font-sans text-sm font-600 text-v4-text mb-2">{item.title}</h4>
                      <div className="flex items-center justify-between font-sans text-xs text-v4-text-muted">
                        <span>{item.targetWordCount} mots</span>
                        <span className={`px-2 py-1 rounded-full font-600 ${
                          item.priority === 'high' ? 'bg-red-100 text-red-700' :
                          item.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.priority}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <LightbulbIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="font-sans text-sm text-blue-900 leading-relaxed">
            <strong className="font-600">Astuce:</strong> Les opportunités identifiées dans la Veille sont automatiquement ajoutées au Backlog.
          </p>
        </div>
      </div>
    </div>
  );
}
