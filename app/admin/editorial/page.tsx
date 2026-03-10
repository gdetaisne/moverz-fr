import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

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
    { status: 'backlog', label: 'Backlog', emoji: '📋', color: 'gray' },
    { status: 'in_progress', label: 'En cours', emoji: '⚡', color: 'blue' },
    { status: 'review', label: 'Review', emoji: '👁️', color: 'yellow' },
    { status: 'published', label: 'Publié', emoji: '✅', color: 'green' },
  ] as const;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">📅 Calendrier Éditorial</h1>
        <p className="text-gray-600 mt-1">Gestion du workflow de production de contenu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statusColumns.map(col => {
          const count = items.filter(item => item.status === col.status).length;
          return (
            <div key={col.status} className="bg-white rounded-lg shadow p-4">
              <div className="text-sm font-medium text-gray-600">{col.emoji} {col.label}</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{count}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statusColumns.map(col => {
          const columnItems = items.filter(item => item.status === col.status);
          
          return (
            <div key={col.status} className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-3">
                {col.emoji} {col.label} ({columnItems.length})
              </h3>
              
              <div className="space-y-3">
                {columnItems.length === 0 ? (
                  <p className="text-sm text-gray-500 italic">Aucun article</p>
                ) : (
                  columnItems.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm p-3 border-l-4 border-blue-500">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{item.targetWordCount} mots</span>
                        <span className={`px-2 py-1 rounded-full ${
                          item.priority === 'high' ? 'bg-red-100 text-red-700' :
                          item.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
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

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          💡 <strong>Astuce:</strong> Les opportunités identifiées dans la Veille sont automatiquement ajoutées au Backlog.
        </p>
      </div>
    </div>
  );
}
