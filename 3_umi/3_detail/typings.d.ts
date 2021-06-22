// typings就方便TypeScript识别、编译、智能提示TypeScript无法识别的JS库的特性和语法

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
