NAMESPACE=monitoring

helm repo add loki https://grafana.github.io/loki/charts
helm repo update
helm install loki loki/loki-stack --create-namespace -n $NAMESPACE

helm repo add grafana https://grafana.github.io/helm-charts
helm install loki-grafana grafana/grafana -n $NAMESPACE

# getting pwd
kubectl get secret --namespace monitoring loki-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo