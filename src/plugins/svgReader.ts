export default function() {
    return {
        name: 'svg-reader',
        resolveId ( source: string ) {
            if (source === 'virtual-module') {
                return source; // this signals that rollup should not ask other plugins or check the file system to find this id
            }
            return null; // other ids should be handled as usually
        },
        load ( id: string ) {
            if (id === 'virtual-module') {
              return 'export default "This is virtual!"'; // the source code for "virtual-module"
            }
            return null; // other ids should be handled as usually
          }
    }
}