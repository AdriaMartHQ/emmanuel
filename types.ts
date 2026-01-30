
export interface CaseItem {
  title: string;
  type: string;
  region: string;
  needs: string;
  content: string;
  keyPoints: string;
  feedback: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export interface RegionNode {
  title: string;
  nodes: string[];
}
