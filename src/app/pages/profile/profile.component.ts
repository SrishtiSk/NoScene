import { Component, signal } from '@angular/core';
import { PageShellComponent } from '../../shared/page-shell/page-shell.component';


interface Skill{
  name:string;
  claim: string;
  level: 'core' | 'strong' | 'growing';
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PageShellComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  resumeOpen = signal(false);
  skills: Skill[] = [
    { name: 'Angular', claim: 'My playground. 4 years deep.', level: 'core' },
    { name: 'TypeScript', claim: 'Types are not optional. Neither am I.', level: 'core' },
    { name: 'JavaScript', claim: 'Where it all started.', level: 'core' },
    { name: 'React', claim: 'I speak this too.', level: 'growing' },
    { name: 'HTML/CSS', claim: 'Pixel precision. Always.', level: 'strong' },
    { name: 'REST APIs', claim: 'Integration is half the product.', level: 'strong' },
    { name: 'Python', claim: 'When JS won\'t cut it.', level: 'growing' },
    { name: 'Figma', claim: 'I design before I code.', level: 'growing' },
  ];

  experience = [
    {
      role: 'Executive — Enrichment',
      company: 'Straive',
      period: 'Dec 2025 – Present',
      line: 'Automating academic journal workflows. Cutting 15min tasks to 4min.'
    },
    {
      role: 'Freelance & Consulting',
      company: 'Rathnatraya · Witting.AI',
      period: 'Oct 2023 – Nov 2025',
      line: 'Digitized operations. Built React dashboards. Shipped real products.'
    },
    {
      role: 'Associate Software Engineer',
      company: 'Biofourmis India',
      period: 'Apr 2022 – Jul 2023',
      line: 'Angular. Patient-care apps. REST APIs. Drag-and-drop. Reusable components.'
    },
    {
      role: 'Digital Engineer',
      company: 'Sonata Software',
      period: 'Jan 2021 – Apr 2022',
      line: 'Skill management portal. PWA. Bug fixes that actually mattered.'
    },
  ]; 

  openResume() { this.resumeOpen.set(true); }
  closeResume() { this.resumeOpen.set(false); }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume-srishti.pdf';
    link.download = 'Srishti_Sk.pdf';
    link.click();
  }

  contacts = [
    { icon: '✉️', label: 'Email', value: 'srishtisureshkumar@gmail.com', href: 'mailto:srishtisureshkumar@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 8792883637', href: 'tel:+918792883637' },
    { icon: '💼', label: 'LinkedIn', value: 'Srishtisk', href: 'https://linkedin.com/in/Srishtisk' },
    { icon: '🐙', label: 'GitHub', value: 'SrishtiSk', href: 'https://github.com/SrishtiSk' },
  ];
}
