from elasticsearch import Elasticsearch

es = Elasticsearch("http://elasticsearch:9200")

query = {
    "query": {
        "match_phrase": {
            "message": "failed login"
        }
    }
}