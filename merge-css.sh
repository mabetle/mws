
workdir="${GOPATH}/src/github.com/mabetle/mws"
cssdir="${workdir}/public/css"

csses=`cat ${workdir}/merge-css.txt`

echo "" > ${cssdir}/all-merge.css

for css in ${csses}; do
	echo "cat ${cssdir}/${css} >> ${cssdir}/all-merge.css"
	cat ${cssdir}/${css} >> ${cssdir}/all-merge.css
done
