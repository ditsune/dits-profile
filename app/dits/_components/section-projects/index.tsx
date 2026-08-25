import Heading2 from "@/components/heading-2";
import { Project, PROJECT_LIST } from "@/components/datas/project";

type Props = {
  onRef: (el: HTMLElement | null) => void;
};

export default function SectionProjects({ onRef }: Props) {
  return (
    <section
      id="projects"
      ref={(el) => onRef(el)}
      className="py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <Heading2>Projects</Heading2>
          <p className="text-sm text-muted-foreground font-mono">
            Tools yang dibangun dari masalah nyata — dan dipakai setiap hari.
          </p>
        </div>

        <div className="divide-y divide-border">
          {PROJECT_LIST.map((item) => (
            <Project.Card item={item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
